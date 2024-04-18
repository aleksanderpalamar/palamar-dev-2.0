import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Production", "Development", "Issues"],
      },
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
    defineField({
      name: "domains",
      title: "Domains",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description:
                "Label for the URL (e.g., 'Live Site', 'Repository')",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "URL of the project",
            },
          ],
        },
      ],
    }),
  ],
});

//   of: [{ type: "reference", to: { type: "category" } }],
