import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

import { CustomComponent } from './custom_component';

const MyNewVisType = (Private) => {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createReactVisualization({
    name: 'custom_ui',
    title: 'A Custom UI',
    icon: 'my_icon',
    description: 'Custom new ui',
    visConfig: {
       component: CustomComponent,
       optionTabs: [
        { title: 'custom_ui', editor: CustomComponent }
    ]
    }
  });
}

VisTypesRegistryProvider.register(MyNewVisType);