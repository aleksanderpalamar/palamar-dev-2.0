import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import projectSchema from "./schemas/projectSchema";
import edSchema from "./schemas/edSchema";
import exSchema from "./schemas/exSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, projectSchema, edSchema, exSchema],
};
