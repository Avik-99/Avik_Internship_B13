import { describe, expect, it } from "vitest";
import { demoSchema, institutionTypes } from "./marketing-content";

const valid = {
  name: "Amina Rahman",
  institution: "Example School",
  type: "School",
  contact: "amina@example.com",
  message: "",
};
describe("Demo form rules", () => {
  it("supports all six requested institution configurations", () => {
    expect(institutionTypes).toEqual([
      "School",
      "College",
      "University",
      "Medical college",
      "Madrasa",
      "Training center",
    ]);
    for (const type of institutionTypes)
      expect(demoSchema.safeParse({ ...valid, type }).success).toBe(true);
    expect(demoSchema.safeParse({ ...valid, type: "Other" }).success).toBe(false);
  });
  it("requires a name, institution, institution type, and phone or email", () => {
    expect(demoSchema.safeParse(valid).success).toBe(true);
    for (const key of ["name", "institution", "type", "contact"])
      expect(demoSchema.safeParse({ ...valid, [key]: "" }).success).toBe(false);
  });
  it("accepts either phone or email and rejects invalid contact details", () => {
    expect(demoSchema.safeParse({ ...valid, contact: "+880 1712 345678" }).success).toBe(true);
    expect(demoSchema.safeParse({ ...valid, contact: "not-an-email" }).success).toBe(false);
  });
});
