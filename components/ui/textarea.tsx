import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    React.useEffect(() => {
      if (props.value && innerRef.current) {
        innerRef.current.style.height = 'auto';
        innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
      }
    }, [props.value]);

    React.useEffect(() => {
      if (typeof ref === 'function') {
        ref(innerRef.current);
      } else if (ref) {
        ref.current = innerRef.current;
      }
    }, [ref, innerRef]);

    return (
      <textarea
        className={cn(
          "resize-none flex w-full h-auto bg-transparent px-3 py-2 text-md placeholder:text-muted-foreground focus-visible:outline-none read-only:max-h-[25vh] read-only:overflow-auto",
          className
        )}
        ref={innerRef}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
