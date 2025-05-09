// components/LabeledInput.tsx
import { forwardRef } from "react";

import { EmailInput } from "./email-input";
import { Label } from "./label";
import { PasswordInput } from "./password-input";
import { Input } from "./input";

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    type?: "text" | "password" | "email";
}

const LabeledInput = forwardRef<HTMLInputElement, LabeledInputProps>(
    ({ label, id, placeholder, required = false, type = "text", ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <Label htmlFor={id} required={required}>{label}</Label>
                {type === "password" ? (
                    <PasswordInput id={id} placeholder={placeholder} ref={ref} {...props} />
                ) : type === "email" ? (
                    <EmailInput id={id} placeholder={placeholder} ref={ref} {...props} />
                ) : (
                    <Input id={id} placeholder={placeholder} ref={ref} {...props} />
                )}
            </div>
        );
    }
);

LabeledInput.displayName = "LabeledInput";

export default LabeledInput;