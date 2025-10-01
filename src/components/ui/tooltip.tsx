import * as React from "react"

// Safe tooltip stubs to avoid React instance conflicts during runtime
// They render children without importing @radix-ui/react-tooltip

type AnyProps = Record<string, any>

const TooltipProvider: React.FC<{ children?: React.ReactNode } & AnyProps> = ({ children }) => (
  <>{children}</>
)

const Tooltip: React.FC<{ children?: React.ReactNode } & AnyProps> = ({ children }) => (
  <>{children}</>
)

const TooltipTrigger: React.FC<{ children?: React.ReactNode; asChild?: boolean } & AnyProps> = ({ children }) => (
  <>{children}</>
)

const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AnyProps>(
  (_props, _ref) => null
)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

