import { FormularioModule } from './formulario.module';

describe('FormularioModule', () => {
  let formsModule: FormularioModule;

  beforeEach(() => {
    formsModule = new FormularioModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
