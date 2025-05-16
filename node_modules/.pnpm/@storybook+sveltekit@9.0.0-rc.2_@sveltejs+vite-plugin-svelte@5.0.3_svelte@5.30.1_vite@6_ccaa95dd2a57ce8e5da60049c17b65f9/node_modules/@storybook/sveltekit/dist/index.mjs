import { preview_exports } from './chunk-UUT6FZ4K.mjs';
import './chunk-CEH6MNVV.mjs';
import { INTERNAL_DEFAULT_PROJECT_ANNOTATIONS as INTERNAL_DEFAULT_PROJECT_ANNOTATIONS$1 } from '@storybook/svelte';
export * from '@storybook/svelte';
import { composeConfigs, setDefaultProjectAnnotations, setProjectAnnotations as setProjectAnnotations$1 } from 'storybook/preview-api';

function setProjectAnnotations(projectAnnotations){return setDefaultProjectAnnotations(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),setProjectAnnotations$1(projectAnnotations)}var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=composeConfigs([INTERNAL_DEFAULT_PROJECT_ANNOTATIONS$1,preview_exports]);

export { setProjectAnnotations };
