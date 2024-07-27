import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ApplicationHeader() {
    const username = localStorage.getItem('name');
    const onClick = () => {
        localStorage.removeItem('name');
        window.location.reload();
    }
    return (
        <Navbar expand='lg' bg="primary" sticky='top' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src="logo.png" height={50} rounded />
                    Natwest
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ color: '#fff' }}>
                        {username}
                       
                    </Navbar.Text>
                    <Button variant="outline-secondary" aria-label="Logout" onClick={onClick} size='sm'>
                            <svg width="24px" height="24px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>shut_down [#1431]</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -560.000000)" fill="#fff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M378.381271,401.145 C377.596921,400.752 376.64982,401.278 376.64982,402.123 C376.64982,402.552 376.91862,402.925 377.316571,403.126 C380.236622,404.602 382.110873,407.716 381.575372,411.174 C381.046172,414.602 378.050521,417.343 374.434319,417.728 C369.515067,418.251 365.333966,414.581 365.333966,410 C365.333966,407.004 367.121066,404.4 369.733467,403.101 C370.102018,402.918 370.349818,402.572 370.349818,402.176 L370.349818,402.084 C370.349818,401.256 369.423717,400.745 368.651967,401.129 C364.951765,402.966 362.545164,406.841 363.072265,411.191 C363.624565,415.742 367.515866,419.43 372.296519,419.936 C378.634321,420.607 383.999823,415.9 383.999823,410 C383.999823,406.155 381.722372,402.818 378.381271,401.145 M372.449819,409 L372.449819,401 C372.449819,400.447 372.920219,400 373.499819,400 C374.080469,400 374.549819,400.447 374.549819,401 L374.549819,409 C374.549819,409.552 374.080469,410 373.499819,410 C372.920219,410 372.449819,409.552 372.449819,409" id="shut_down-[#1431]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ApplicationHeader;