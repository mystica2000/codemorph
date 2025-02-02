import { Parameters } from "../morph";
import { addClassToDeclarationsAndImports } from "./effects/component/component-effects";
import { exportGraphqlFile } from "./effects/graphql/graphql";
import { exportInterfaceFile } from "./effects/interface/interface";
import { addEffectToNgModule } from "./effects/ngrx/effects/ngrx-effects";
import { addFacadeToNgModule } from "./effects/ngrx/facade/ngrx-facade";
import { addReducerToNgModule } from "./effects/ngrx/reducer/ngrx-reducer";
import { exportServiceFile } from "./effects/service/service";
import { exportComponentFile } from "./effects/standalone-component/standalone-component";
import { AngularType, AngularTypeNames, AngularOptionalType } from "./types/types";

export function angularEffects(filePathWithName: string, type: AngularTypeNames, parameters: Parameters, optionalTypes: AngularOptionalType[]): void {
  switch (type) {
    case AngularTypeNames.Component:
      addClassToDeclarationsAndImports(filePathWithName, parameters.className, optionalTypes);
      break;
    case AngularTypeNames.StandaloneComponent:
      exportComponentFile(filePathWithName)
      break;
    case AngularTypeNames.Service:
      exportServiceFile(filePathWithName);
      break;
    case AngularTypeNames.Interface:
      exportInterfaceFile(filePathWithName)
      break;
    case AngularTypeNames.Graphql:
      exportGraphqlFile(filePathWithName)
      break;
    case AngularTypeNames.NgrxEffects:
      addEffectToNgModule(filePathWithName, parameters.className)
      break;
    case AngularTypeNames.NgrxFacade:
      addFacadeToNgModule(filePathWithName, parameters.className)
      break;  
    case AngularTypeNames.NgrxReducer:
      addReducerToNgModule(filePathWithName, parameters.className, parameters.constantName)
      break;  
  }
}