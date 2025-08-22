import * as React from "react";

import { cn } from "../../lib/utils";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg border bg-white p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`mb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </div>
  );
}
