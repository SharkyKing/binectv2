const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = {
  user: 'admin',
  password: 'Binect123*',
  server: 'database-1.cp2i24seo4qg.eu-north-1.rds.amazonaws.com',
  database: 'Binect',
  options: {
    encrypt: true, // For Azure SQL
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
};

const app = express();
app.use(cors());
app.use(bodyParser.json());

sql.connect(config)
  .then(() => {
    console.log('Connected to SQL Server');
    const PORT = 1433;
    app.listen(PORT, () => {
      console.log(`SQL server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to SQL Server:', err);
  });

app.post('/signup', async (req, res) => {
  const { name, surname, password, email,IPAddress} = req.body;

  const request = new sql.Request();

  const countQuery = `
    SELECT COUNT(*) AS hostCount
    FROM Host
    WHERE ISNULL(IPAddress, 0) = @IPAddress
  `;
  request.input('IPAddress', sql.NVarChar, IPAddress);

  const countResult = await request.query(countQuery);
    const hostCount = countResult.recordset[0].hostCount;

    if (hostCount >= 5) {
      return res.status(400).json({ error: 'Exceeded maximum hosts for this IP address' });
    }

  const sqlQuery = `
    INSERT INTO Host (Firstname, Lastname, Pass, Email, IPAddress)
    VALUES(@name, @surname, @password, @email, @IPAddress)
  `;
  
  const request2 = new sql.Request();

  request2.input('name', sql.NVarChar, name);
  request2.input('surname', sql.NVarChar, surname);
  request2.input('password', sql.NVarChar, password);
  request2.input('email', sql.NVarChar, email);
  request2.input('IPAddress', sql.NVarChar, IPAddress);
  request2.query(sqlQuery, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Signup successful' });
  });
});

app.get('/check-email', async (req, res) => {
  const { email } = req.query;

  try {
      const pool = await sql.connect(config);
      const result = await pool.request()
          .input('email', sql.NVarChar, email)
          .query('SELECT COUNT(*) AS count FROM Host WHERE Email = @email');

      const userCount = result.recordset[0].count;
      res.json({ exists: userCount > 0 }); // Return true if user count > 0, indicating the email already exists
  } catch (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const pool = await sql.connect(config);
      const result = await pool.request()
          .input('email', sql.NVarChar, email)
          .input('password', sql.NVarChar, password)
          .query('SELECT * FROM Host WHERE Email = @email AND Pass = @password');

      const user = result.recordset[0];
      if (!user) {
          return res.status(404).json({ error: 'User not found or incorrect password' });
      }

      // User found, return user data
      res.status(200).json(user);
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(8081, () => {
  console.log(`Server is running on port ${8081}`);
});