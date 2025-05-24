import * as storybook_internal_docs_tools from 'storybook/internal/docs-tools';
import { RenderContext, ArgsStoryFn, BaseAnnotations, ArgTypesEnhancer } from 'storybook/internal/types';
import { S as SvelteRenderer } from './types-b7d0039b.js';
import 'svelte';

declare function extractComponentDescription(component?: any): string;

declare function renderToCanvas({ storyFn, title, name, showMain, showError, storyContext, forceRemount, }: RenderContext<SvelteRenderer>, canvasElement: SvelteRenderer['canvasElement']): () => void;
declare const render: ArgsStoryFn<SvelteRenderer>;

declare function decorateStory(storyFn: any, decorators: any[]): any;

declare const mount: BaseAnnotations<SvelteRenderer>['mount'];

declare const parameters: {
    renderer: string;
    docs: {
        story: {
            inline: boolean;
        };
        extractArgTypes: storybook_internal_docs_tools.ArgTypesExtractor;
        extractComponentDescription: typeof extractComponentDescription;
    };
};

declare const argTypesEnhancers: ArgTypesEnhancer<SvelteRenderer>[];

export { decorateStory as applyDecorators, argTypesEnhancers, mount, parameters, render, renderToCanvas };
