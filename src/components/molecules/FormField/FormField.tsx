import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import type { FormFieldProps } from './form-field.types';

export function FormField({
  label,
  id,
  type = 'text',
  error,
  required = false,
  value,
  onChange,
  placeholder,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        required={required}
      />
      {error && (
        <p className="mt-1 text-sm text-coral-600" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
