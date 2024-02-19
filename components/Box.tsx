// twMerge - tailwind function that takes tailwind css classes in form of a string and maps all specified tailwind classes to css styles
import { twMerge } from "tailwind-merge"

// Box properties
interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

// Define box component
const Box: React.FC<BoxProps> = ({
    children,
    className 
}) => {
    return(
        <div className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
            `,
            className
        )}>
            {children}
        </div>
    )
}

export default Box;