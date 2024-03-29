import '../../navbar.css'

const NavbarItem = ({active, hrefer, name}) => {

    const handleClick = (event) => {
        // Prevent default action if the link is already active
        if (active) {
          event.preventDefault();
        }
      };

    return (  
        <a className={`item link-${active ? 'active' : ''}`} href={hrefer} onClick={handleClick}>{name}</a>
    );
}
 
export default NavbarItem;