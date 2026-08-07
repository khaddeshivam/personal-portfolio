import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400", {
  variants: { variant: { primary: "bg-zinc-50 px-6 py-3.5 text-sm text-zinc-950 shadow-[0_12px_30px_rgba(255,255,255,0.1)] hover:-translate-y-0.5", ghost: "border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm text-zinc-100 hover:-translate-y-0.5 hover:border-white/25" } },
  defaultVariants: { variant: "primary" }
});
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean; children?: React.ReactNode; size?: string };
function Button({ className, variant, asChild, children, size: _size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant }), className);
  if (asChild && isValidElement(children)) { const child = children as ReactElement<{ className?: string }>; return cloneElement(child, { className: cn(classes, child.props.className) }); }
  return <button className={classes} {...props}>{children}</button>;
}
export { Button, buttonVariants };
