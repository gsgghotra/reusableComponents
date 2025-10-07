// Helping Functions
const manageSection = (newSection) => {
  const title = document.querySelector(
    "#coverForm .ne-cover-claim-block .ne-block-title.ne-without-title"
  );
  if (title) {
    title.classList.add(`opt-${test_id}-force-hide`);
    insertContent(newSection, title, "beforeBegin");
  }
};

const generateNewSection = () => {
  let newTemplate = `
    <optimizely id="opt-test-${test_id}">
        <div id="opt-test-${test_id}-label">
            Better safety
            <span class="clipPath"></span>
        </div>

        <div id="opt-test-${test_id}-mainSection">
            <div class="opt-rr-item">
                <div class="opt-rr-icon">
                    <img src="//cdn.optimizely.com/img/339441196/736726959d604c63b4ce5ec78b25dbb2.png" class="opt-rr-mainImg" alt="visibility image">
                    <img src="//cdn.optimizely.com/img/339441196/b8129abd043d4e22837b7f25d04192b9.png" class="opt-rr-greenTick" alt="tick image">
                </div>
                <p>Lifetime guarantee for as long as you own the vehicle</p>
            </div>
            <div class="opt-rr-item">
                <div class="opt-rr-icon">
                    <img src="//cdn.optimizely.com/img/339441196/6ba12071ec094731b12b0d54b9ddae7b.png" class="opt-rr-mainImg" alt="Snow image">
                    <img src="//cdn.optimizely.com/img/339441196/b8129abd043d4e22837b7f25d04192b9.png" class="opt-rr-greenTick" alt="tick image">
                </div>
                <p>You'll only have to cover your excess</p>
            </div>
            <div class="opt-rr-item">
                <div class="opt-rr-icon">
                    <img src="//cdn.optimizely.com/img/339441196/dbe2247d9df649f598358c155296f513.png" class="opt-rr-mainImg" alt="Lifespan image">
                    <img src="//cdn.optimizely.com/img/339441196/b8129abd043d4e22837b7f25d04192b9.png" class="opt-rr-greenTick" alt="tick image">
                </div>
                <p>We'll handle the claim on your behalf </p>
            </div>
        </div>
    </optimizely>
  `;
  return newTemplate;
};
const createContent = () => {
  testStyle(test_id);
  const newSection = generateNewSection();
  manageSection(newSection);
};

function testStyle(test_id) {
  let style = document.querySelector(`#opt-${test_id}-style`);
  if (style) style.remove();

  style = `
    <style id="opt-${test_id}-style">
        .opt-${test_id}-force-hide {
            display: none !important;
        }
        #opt-test-${test_id}{
        position: relative;
    }
    #opt-test-${test_id}-label{
        border-radius: 2px 2px 2px 0px;
        background: #449F44;
        line-height: normal;
        position: absolute;
        left: 7px;
        top: -12px;
        width: 110px;
        height: 22px;
        color: #FFF;
        font-family: 'Open Sans';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        padding: 6px 12px;
        line-height: 50%;
        letter-spacing: 0;
    }
    #opt-test-${test_id}-label .clipPath{
        clip-path: polygon(0 0, 100% 100%, 100% 0);
        background: #3A813A;
        left: 0;
        bottom: -5px;
        position: absolute;
        width: 5px;
        height: 5px;
    }
    #opt-test-${test_id}-mainSection{
        display: flex;
        padding: 16px;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #ECECEC;
        margin-bottom: 10px;
        margin-top: 16px;
        align-items: flex-start;
        border-radius: 6px;
    }
    #opt-test-${test_id}-mainSection p{
        font-family: Open Sans;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #41484B;
        text-align: center;
    }
    #opt-test-${test_id}-mainSection .opt-rr-item{
        display: flex;
        align-items: center;
    }
    #opt-test-${test_id}-mainSection .opt-rr-icon{
        width: 48px;
        height: 48px;
        background: black;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #D6F1FF;
        border-radius: 8px;
        position:relative;
    }
    #opt-test-${test_id}-mainSection .opt-rr-icon .opt-rr-mainImg{
        width: 35px;
        padding:3px;
    }
    #opt-test-${test_id}-mainSection .opt-rr-icon .opt-rr-greenTick{
        width: 15px;
        position: absolute;
        top: -5px;
        right: -5px;
    }
    #opt-test-${test_id}-rrLabel .ne-improved-visibility{
        font-weight: 400;
        left: -10px;
        position: absolute;
        text-align: center;
        top: -10px;
        width: 122px;
    }
    @media (max-width: 767px) {
        #opt-test-${test_id}-mainSection {
            padding-top:24px;
        }
        #opt-test-${test_id}-mainSection .opt-rr-item {
            flex-direction: column;
        }
        #opt-${test_id}-carousel .slide_content {
            margin-top: 24px;
        }
    }
    </style>`;
  insertContent(style, "head", "beforeend");
}

window.abTest.experiments[test_id] = {
  createContent: createContent,
};
