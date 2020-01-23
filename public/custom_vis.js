import 'plugins/custom_ui/index.css';

import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

import { DefaultEditorSize } from 'ui/vis/editor_size';

import { EditorComponent } from './editor_component';
import {HtmlVisWrapper} from './custom_component'
import htmlVisTemplate from './html_vis_template.html';

const MyNewVisType = (Private) => {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createReactVisualization({
    name: 'custom_ui',
    title: 'A Custom UI',
    icon: 'editorCodeBlock',
    description: 'Custom new ui',
    visConfig: {
       component: HtmlVisWrapper,
       defaults: {
        fontSize: 12,
        openLinksInNewTab: false
      }
    },
    editorConfig: {
      optionsTemplate: htmlVisTemplate,
      enableAutoApply: true,
      defaultSize: DefaultEditorSize.LARGE,
    },
    requestHandler: 'none',
    responseHandler: 'none',
    // implementsRenderComplete: true
  });
}

VisTypesRegistryProvider.register(MyNewVisType);

export default MyNewVisType;
 