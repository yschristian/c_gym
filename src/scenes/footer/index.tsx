import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo}  alt="logo"/>
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque dolore aspernatur labore in dicta porro accusantium corporis reiciendis ipsam ad eveniet accusamus, tempora non aliquam consequuntur omnis unde nostrum?
                </p>
                <p>© YDev All Righths Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="mt-5">LinkedIn</p>
                <p className="mt-5">Twitter</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="mt-5">078476363262</p>
                <p className="mt-5">test@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer