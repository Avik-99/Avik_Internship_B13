import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { demoSchema, institutionTypes } from "@/lib/marketing-content";

export function DemoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "institution" | "type" | "contact" | "message", string>>
  >({});
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = demoSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    if (!result.success) {
      setErrors(
        Object.fromEntries(
          result.error.issues.map((issue) => [String(issue.path[0]), issue.message]),
        ),
      );
      return;
    }
    setErrors({});
    setSuccess(true);
    event.currentTarget.reset();
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);
        if (!value) {
          setSuccess(false);
          setErrors({});
        }
      }}
    >
      <DialogContent className="demo-dialog">
        {success ? (
          <div className="demo-success">
            <CheckCircle2 />
            <DialogTitle>You’re all set — for the preview.</DialogTitle>
            <DialogDescription>
              Your form passed validation. This is a preview form: no request was sent and your
              details were not saved.
            </DialogDescription>
            <Button onClick={() => onOpenChange(false)}>
              Back to Biddakool <ArrowRight />
            </Button>
          </div>
        ) : (
          <>
            <span className="eyebrow">LET’S TALK EDUCATION</span>
            <DialogTitle className="demo-title">See Biddakool in action.</DialogTitle>
            <DialogDescription>Tell us a little about your institution.</DialogDescription>
            <form onSubmit={submit} noValidate className="demo-form">
              {(
                [
                  { name: "name", label: "Your name", placeholder: "Full name" },
                  {
                    name: "institution",
                    label: "Institution name",
                    placeholder: "Your institution",
                  },
                ] as const
              ).map((field) => (
                <label key={field.name}>
                  {field.label}
                  <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.name === "name" ? "name" : "organization"}
                    aria-invalid={!!errors[field.name]}
                  />
                  {errors[field.name] && <span className="field-error">{errors[field.name]}</span>}
                </label>
              ))}
              <label>
                Institution type
                <select name="type" defaultValue="" aria-invalid={!!errors.type}>
                  <option value="" disabled>
                    Select institution type
                  </option>
                  {institutionTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                {errors.type && <span className="field-error">{errors.type}</span>}
              </label>
              <label>
                Phone or email
                <Input
                  name="contact"
                  placeholder="Email address or phone number"
                  aria-invalid={!!errors.contact}
                />
                {errors.contact && <span className="field-error">{errors.contact}</span>}
              </label>
              <label>
                Message <span className="text-muted-foreground">(optional)</span>
                <textarea name="message" placeholder="What would you like to explore?" rows={3} />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>
              <p className="form-note">Preview only. Your details won’t be saved or sent.</p>
              <Button type="submit" size="lg">
                Request a demo <ArrowRight />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
