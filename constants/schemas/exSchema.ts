import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
});
