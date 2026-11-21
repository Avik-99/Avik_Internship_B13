import { describe, expect, it } from "vitest";
import {
  acceptsDemoCredentials,
  summarizeAttendance,
  validateCollection,
  canPublish,
  gradeFor,
} from "./logic";
import { mockStudents, mockExams } from "./mock-data";
describe("Institute demo rules", () => {
  it("accepts any non-empty demo credentials, including a one-character password", () => {
    expect(acceptsDemoCredentials("anything", "x")).toBe(true);
    expect(acceptsDemoCredentials("", "x")).toBe(false);
    expect(acceptsDemoCredentials("demo", "")).toBe(false);
  });
  it("counts Present, Absent, and Late once per student", () => {
    const roster = mockStudents.slice(0, 3);
    const first = roster[0];
    const second = roster[1];
    if (!first || !second) throw new Error("Missing fixtures");
    expect(summarizeAttendance(roster, { [first.id]: "Absent", [second.id]: "Late" })).toEqual({
      Present: 1,
      Absent: 1,
      Late: 1,
    });
  });
  it("issues collections only for a positive amount within outstanding dues", () => {
    const student = mockStudents[0];
    expect(student?.due).toBe(2400);
    expect(validateCollection(student, 2400)).toBe(true);
    expect(validateCollection(student, 2401)).toBe(false);
    expect(validateCollection(student, 0)).toBe(false);
    expect(validateCollection(student, -1)).toBe(false);
    expect(validateCollection(undefined, 100)).toBe(false);
  });
  it("allows publication only for a Completed exam", () => {
    const exam = mockExams[0];
    if (!exam) throw new Error("Missing exam");
    expect(canPublish({ ...exam, status: "Completed" })).toBe(true);
    expect(canPublish({ ...exam, status: "Draft" })).toBe(false);
    expect(canPublish({ ...exam, status: "Published" })).toBe(false);
  });
  it("assigns sample grades at explicit boundaries", () => {
    expect(gradeFor(80)).toBe("A+");
    expect(gradeFor(79)).toBe("A");
    expect(gradeFor(33)).toBe("D");
    expect(gradeFor(32)).toBe("F");
  });
});
