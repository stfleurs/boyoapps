type DeviceFrameProps = {
  type: "laptop" | "phone";
  children?: React.ReactNode;
  label: string;
  className?: string;
};

export function DeviceFrame({ type, children, label, className = "" }: DeviceFrameProps) {
  if (type === "laptop") {
    return (
      <div className={`${className}`}>
        <div className="relative mx-auto max-w-[600px]">
          <div className="overflow-hidden rounded-t-xl border border-border bg-white shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">{label}</span>
            </div>
            <div className="aspect-[16/10] bg-white">
              {children || (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-accent/20" />
                    <p className="text-sm font-medium text-muted">Screenshot</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mx-auto -mt-1 h-3 w-[60%] rounded-b-lg border border-t-0 border-border bg-surface" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="mx-auto max-w-[240px]">
        <div className="rounded-[2.5rem] border-4 border-primary bg-primary p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[2rem] bg-white">
            <div className="flex items-center justify-center border-b border-border bg-surface py-2">
              <span className="text-[10px] text-muted">{label}</span>
            </div>
            <div className="aspect-[9/19] bg-white">
              {children || (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-accent/20" />
                    <p className="text-xs text-muted">Screenshot</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
