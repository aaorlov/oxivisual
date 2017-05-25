export class Config {
    static SITE_STRUCTURE:string = '/site_structure.json';
    static PROJ_LOC:string = 'uploads/projects/';
    static PROJ_DMNS:any = ["&", '='];
    static PROJ_DESTINATION:any = {
        GeneralStructure: 0,
        LinkGeneralStructure: 1,
        ModelStructure: 2,
        OxiCamera: 3,
        Vector3: 4,
        ProjFile: 5,
    };
    static EVENTS_NAME = {
        CNTXMENU: 'contextmenu',
        CLICK: 'click',
        TOUCH_START: 'touchstart',
        TOUCH_MOVE: 'touchmove',
        TOUCH_END: 'touchend',
        MOUSE_OUT: 'mouseout',
        MOUSE_DOWN: 'mousedown',
        MOUSE_MOVE: 'mousemove',
        MOUSE_UP: 'mouseup'
    };
    static FILE = {
        TYPE: {
            MODEL_OBJ: 1,
            PREVIEW_IMG: 2,
            ALIGN_IMG: 3
        },
        STORAGE: {
            SITE_STRUCTURE: 'structure',
            MODEL_OBJ: 'model[]',
            PREVIEW_IMG: 'frames[]',
            ALIGN_IMG: 'alignFrames[]',
            PRELOADER: 'preloader[]',
            TOOLTIP:'tooltip[]'
        },
        DIR: {
            DELIMETER: "/",
            PROJECT_PREVIEW: 'images/',
            PROJECT_ALIGN_IMG: 'align_images/',
            PROJECT_TEMPLATE: {
                NAME: 'templates/',
                CSS: 'style.css',
                HTML: 'index.html',
                TYPES: ['preloader/', 'tooltip/'],
                _TYPE:{
                    PRELOADER:0,
                    TOOLTIP:1,
                }

            },
            PREVIEW: {
                LOW: 'low/',
                WEBP: 'webp/',
            }
        }

    };
    static IGNORE:string = 'ignore';
    static ANGLE_STEP:number = 10;
    static DYNAMIC_IJNECT:any = {
        PRELOADER: {
            HTML: './assets/defaults/preloader/index.html',
            CSS: './assets/defaults/preloader/style.css'
        }
    }

}
export class ProjClasses {
    static IMG_SLIDER:string = 'img-slider-container';
    static CENTER_CONTAINER:string = 'center-container';
    static PROJ_CONTROLS:string = 'oxi-controls';
    static PROJ_CONTROLS_MOVE:string = 'oxi-controls-move';
    static PROJ_TOOLTIPS:any = {
        CONTAINER: 'oxi-tooltips',
        TOOLTIP: 'tooltip',
        HEADER: 'header',
        BODY: 'body',
    };
    static ACTIVE:string = 'active';

}
