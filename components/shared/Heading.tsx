interface HeadingProps {
  text: string | undefined;
  icon?: any;
  color?: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="w-[150px] lg:sticky lg:top-10">
      <p
        className={`font-medium flex items-center ${
          props.color
            ? `${props.color} text-xs md:text-sm capitalize`
            : "text-foreground text-base lg:text-sm uppercase tracking-widest"
        }`}>
        <props.icon
          className={`mr-2 ${
            props.color ? "w-3.5 h-3.5" : "w-4 h-4 lg:w-4 lg:h-4"
          }`}
          aria-hidden="true"
        />
        {props.text}
      </p>
    </div>
  )
}

export default Heading;