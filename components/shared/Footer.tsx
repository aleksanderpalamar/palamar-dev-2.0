import MaxContainer from "./MaxContainer";

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-20 py-8 lg:py-16 border-t bg-secondary">
      <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex lg:items-center flex-col lg:flex-row justify-between gap-1 lg:gap-10 flex-wrap">
            <p className="text-xs text-muted-foreground">
              &copy; Copyright | All Rights Reserver
            </p>
            <p className="text-xs text-muted-foreground">
              Developing by PalamarDev
            </p>
          </div>
        </div>
      </MaxContainer>
    </footer>
  )
}

export default Footer;