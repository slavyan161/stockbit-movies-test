import FooterComponent from "./footer.component"
import NavbarComponent from "./navbar.component"

function LayoutComponent(props: any) {
    return (
        <div>
            <NavbarComponent />
            {props.children}
            <FooterComponent />
        </div>
    )
}

export default LayoutComponent
