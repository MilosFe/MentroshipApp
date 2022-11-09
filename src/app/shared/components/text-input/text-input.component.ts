import {
  Component,
  Injector,
  Input,
  ChangeDetectionStrategy,
  Inject,
  forwardRef,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  constructor(@Self() private _injector: Injector) {
    this._control = this._injector.get(NgControl);

    this._control && (this._control.valueAccessor = this);
  }

  /**
   * Field validation methods
   */
  public get invalid(): any {
    return this._control ? this._control.invalid : false;
  }

  public get showError(): any {
    if (!this._control) {
      return false;
    }

    const { dirty, touched } = this._control;

    return this.invalid ? dirty || touched : false;
  }

  public get errors(): string[] {
    if (!this._control) {
      return [];
    }
    // NOTE: Define key value default error messages
    let errors = this._control.errors;
    if (errors) {
      return Object.keys(errors).map((key) => key);
    }

    return [];
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      this.onChange(value);
    }
  }
  @Input() name: string = '';
  @Input() icon: string = 'favorite';
  @Input() hint: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() validator: any;
  @Input() errorLabels: any[] = [];

  public _control: any;
  public disabled = false;
  private _value: string | null = null;

  /**
   * Call when value has changed programatically
   */

  public onChange(newVal: string) {
    console.log('Register change4');
    console.log(newVal);
  }
  private onTouched(_?: any) {}

  public onBlur() {
    this.onTouched();
  }

  /**
   * Model -> View changes
   */
  public writeValue(value: string): void {
    console.log('Register change');
    this._value = value;
  }

  public registerOnChange(fn: any): void {
    console.log('Register change2');
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    console.log('Register change3');
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
