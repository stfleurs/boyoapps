type AppIconProps = {
  name: string;
  color: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-20 w-20 text-3xl",
};

export function AppIcon({ name, color, size = "md" }: AppIconProps) {
  return (
    <div
      className={`${sizeMap[size]} flex items-center justify-center rounded-2xl font-bold text-white shadow-sm`}
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  );
}
