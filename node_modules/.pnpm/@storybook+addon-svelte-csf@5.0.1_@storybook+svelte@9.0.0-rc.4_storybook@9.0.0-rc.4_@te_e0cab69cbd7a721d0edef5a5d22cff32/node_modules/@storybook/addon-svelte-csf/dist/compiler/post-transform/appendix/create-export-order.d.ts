import type { getStoriesIdentifiers } from '../../../parser/analyse/story/attributes/identifiers.js';
import type { ESTreeAST } from '../../../parser/ast.js';
interface Params {
    storyIdentifiers: ReturnType<typeof getStoriesIdentifiers>;
    filename?: string;
}
export declare function createExportOrderVariable(params: Params): ESTreeAST.ExportNamedDeclaration;
export {};
