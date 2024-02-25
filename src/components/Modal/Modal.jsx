import React, { Fragment } from 'react';
import 'aos/dist/aos.css';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  state2 = {
    isClicked: false,
  };

  render() {
    return (
      <React.Fragment>
        <Fragment>
          <div data-aos="fade-up">
            <div
              onClick={() => this.setState({ isOpen: true, isClicked: false })}
              className={`${
                this.state.isClicked ? 'hide' : 'show'
              } modal-btn mx-auto text-lg lg:text-xl my-14 lg:my-28`}
            >
              Получить бесплатный меч!
            </div>
          </div>

          {this.state.isClicked && (
            <div className="flex lg:justify-center">
              <div className="lg:w-2/3">
                <p
                  data-aos="fade-up"
                  className="modal-text text-lg md:text-xl lg:text-2xl my-10"
                >
                  Сожалеем, что пришлось подвергнуть вас этому испытанию, но,
                  сами понимаете, нельзя пускать в сокровищницу чужаков. Теперь,
                  когда все надоедливые меченосцы отсеяны и веб-дракончику
                  ничего не угрожает, вы получаете доступ к его услугам!
                </p>
                <p
                  data-aos="fade-up"
                  className="modal-text text-[#818181] text-sm md:text-base lg:text-lg"
                >
                  Если вдруг вы хотите ещё раз удостовериться, что вы не
                  принадлежите к охотникам на драконов, пройдите испытание
                  повторно.
                </p>
              </div>
            </div>
          )}

          {this.state.isOpen && (
            <div className="modal">
              <div className="modal-body w-full lg:w-1/2 mx-auto p-6 lg:p-8">
                <h1 className="text-lg mb-2 md:text-xl lg:text-3xl text-[#dad394]">
                  Ловушка для вредоносных рыцарей
                </h1>
                <p className="modal-text text-sm md:text-base lg:text-lg lg:py-2">
                  Если вы рыцарь:
                  <br />- Рооааарррггхх!... гггхх!.. ты попался!.. гхгхрх...
                  рр... хммф.
                </p>
                <p className="modal-text text-sm md:text-base lg:text-lg py-2">
                  Если вы не рыцарь, вам видна кнопка выхода!
                </p>
                <div
                  onClick={() =>
                    this.setState({ isOpen: false, isClicked: true })
                  }
                  className="close-modal-btn border w-58 dad-shadow hover:border-[#dad394] mt-6 p-4"
                >
                  Покинуть западню
                </div>
              </div>
            </div>
          )}
        </Fragment>
      </React.Fragment>
    );
  }
}
