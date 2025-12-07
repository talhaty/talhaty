import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png"; // Replace with your PNG path

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <img
        src={logoImage}
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
