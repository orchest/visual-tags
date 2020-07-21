import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { NotebookTools, INotebookTracker, NotebookPanel } from '@jupyterlab/notebook';
/**
 * The plugin registration information.
 */
declare const plugin: JupyterFrontEndPlugin<void>;
/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export declare class VisualTagsExtension extends NotebookTools.Tool {
    constructor(tracker: INotebookTracker, app: JupyterFrontEnd);
    _openPropertiesListener(e: MouseEvent): void;
    _setChangeListener(): void;
    /**
     * We're adding the cell tags HTML element to the InputArea because
     * it will hide the cell tags for Markdown cells when they are rendered.
     * This is considered consistent with Jupyter practice of hiding MD
     * source/editor when a cell is rendered.
     */
    _updateCellTagDom(node: HTMLElement, tags: Array<string>, cellIndex: Number): void;
    _iterateCells(notebook: NotebookPanel): void;
    private tracker;
    private app;
}
/**
 * Export the plugin as default.
 */
export default plugin;
