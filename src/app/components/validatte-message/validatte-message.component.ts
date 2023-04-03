import { ParsedProperty } from '@angular/compiler';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { TinySliderInstance, TinySliderSettings } from 'tiny-slider';
@Component({
  selector: 'app-validatte-message',
  templateUrl: './validatte-message.component.html',
  styleUrls: ['./validatte-message.component.scss'],
})
export class ValidatteMessageComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @Input() error: any;
  @Input() condition: any;
  @ViewChild('tinySlider', { static: false }) tinySlider!: any;
  @ViewChildren('data') data!: QueryList<any>;
  images = [
    'https://picsum.photos/250/350',
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/300',
  ];

  image2 = [
    'https://picsum.photos/250/350',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/310620140_683111853179491_7701666245374196207_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HhUTXqpCy5wAX98phzu&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBjJUC_ZUk8FnzlHmGPX3Wp2VxpfcVj106reFWV8m1n2Q&oe=642FAF23',
  ];
  msg: string = '';
  changesError: any = {};
  lang = 'vi';
  public tinySliderConfig: TinySliderSettings = {
    gutter: 20,
    items: 1,
    mouseDrag: true,
    controls: true,
    center: true,
    nav: true,
    loop: true,
    onInit: () => {},
  };
  langArr = [
    {
      lang: 'vi',
      image: this.images,
    },
    {
      lang: 'en',
      image: this.image2,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  add() {
    // this.tinySlider.destroy();
    // this.image2 = this.image2.slice(0, 2);
    // [...this.data].forEach((item: any) => {
    //   item.nativeElement.firstChild.src =
    //     'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/339295600_960774355363215_2746549233522363013_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=FF2qvDi9Rb4AX-kh9Aw&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDe0jhl3WCwdhn-__g9zTMeUTHBA2KuNebY02itn5qgcA&oe=64309A53';
    // });

    this.lang = this.lang === 'vi' ? 'en' : 'vi';

    console.log(this.lang);
  }

  show() {
    // if (this.tinySlider) {
    //   // this.tinySlider.initSlider();
    //   this.tinySlider?.sliderInstance?.rebuild();
    // }
  }

  ngAfterViewInit() {
    if (this.tinySlider) {
      this.tinySlider.initSlider();
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change['error'] && change['error'].currentValue) {
      const changeError: any = change['error'].currentValue;
      this.changesError = changeError;
      let check = false;
      this.condition.forEach((item: any, index: number) => {
        if (Object.keys(item).includes(Object.keys(changeError)[0]) && !check) {
          this.showErrorMsg(Object.keys(item)[0] || '');
          check = true;
        }
      });
    } else {
      this.msg = '';
    }
  }

  showErrorMsg(errType: string) {
    if (errType) {
      switch (errType) {
        case 'minlength':
          const length =
            (this.changesError['minlength'] &&
              this.changesError['minlength']['requiredLength']) ||
            1;
          this.msg = `Trường này nhỏ nhất ${length} kí tự`;
          break;
        case 'email':
          this.msg = 'Vui lòng nhập dúng định dạng email';
          break;
        case 'required':
          this.msg = 'Trường này không đc bỏ trống';
          break;
        default:
          this.msg = '';
      }
    }
  }
}
