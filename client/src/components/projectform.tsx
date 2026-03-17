import type { Project } from "../types/project";

interface Props {
  onSubmit: (project: Project) => void;
}

export const ProjectForm = ({ onSubmit }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // mock project
        onSubmit({ title: "New Project", description: "Description", image: "/test.jpg" });
      }}
      className="flex flex-col gap-2 mb-4"
    >
      <input placeholder="Title" className="border p-2 rounded" />
      <input placeholder="Description" className="border p-2 rounded" />
      <input placeholder="Image URL" className="border p-2 rounded" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add</button>
    </form>
  );
};