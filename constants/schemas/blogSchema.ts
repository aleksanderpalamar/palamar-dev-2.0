import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
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
      name: "tags",
      title: "Tags",
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
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
    defineField({
      name: "contents",
      title: "Contents",
      type: "array",
      of: [{ type: "block" }],     
    }),
  ],
});