interface ILoginReturn {
    mes: string;
    type: number;
    url: string;
    status: boolean;
}

interface IGetCourses {}

interface IGetActivities {
    cookie: string;
    courseId: string | number;
    classId: string | number;
    uid: string | number;
}

interface IGetActivitiesReturn {
    errorMsg: string;
    groupList: Group[];
    activeList: Activity[];
    count: number;
    status: number;
    result: number;
}

interface ISign {
    cookie: string;
    uid: string | number;
    activeId: string | number;
}

interface Activity {
    nameTwo: string;
    groupId: number;
    isLook: number;
    releaseNum: number;
    url: string;
    picUrl: string;
    attendNum: number;
    activeType: number;
    nameOne: string;
    startTime: number;
    id: number;
    status: number;
    nameFour: string;
    extraInfo: ExtraInfo;
}

interface ExtraInfo {
    noticeId: number;
}

interface Group {
    classId: string;
    content: string;
    courseId: string;
    createTime: null;
    fid: string;
    id: number;
    isDelete: number;
    name: string;
    sort: number;
    type: number;
    uid: string;
    updateTime: null;
}

interface IActivityDetail {
    fid: object;
    bsid: object;
    locationText: string;
    viewPicPath: string;
    scoreWeight: object;
    source: number;
    starttime: number;
    oldActiveId: object;
    grouptype: object;
    createuidname: object;
    activeSort: number;
    clazzid: number;
    id: number;
    credit: object;
    newOld: object;
    courseId: object;
    jwCourseId: object;
    day: number;
    longitude: object;
    addToCacheTime: number;
    createxxuid: string;
    isclone: number;
    locationRange: string;
    chatid: object;
    ifaveraged: object;
    sfdp: object;
    sffxs: object;
    sxs: object;
    oldOtherId: object;
    activeType: number;
    endtimes: object;
    name: string;
    status: number;
    isold: object;
    ifsendmessage: object;
    ifcommit: object;
    normscore: object;
    ismark: object;
    timeLong: number;
    userStatus: object;
    isbackfill: object;
    stuid: object;
    currentversion: object;
    latitude: object;
    pActiveId: object;
    zhjsid: object;
    signCode: string;
    title: object;
    manual: boolean;
    content: object;
    parentid: number;
    nowTime: number;
    showOpenTimer: number;
    activityTranMode: object;
    ifrefreshewm: number;
    realActiveId: object;
    isresult: number;
    pptPlanId: number;
    attendNum: number;
    isnorm: object;
    hour: number;
    dpurl: object;
    isbegins: object;
    createtime: number;
    currentstatus: object;
    ifphoto: number;
    otherId: number;
    endtime: number;
    showhide: object;
    endtimeStr: string;
    userName: object;
    ifopenAddress: number;
    pptnum: number;
    releaseNum: number;
    editconfig: object;
    url: object;
    minute: number;
    iphoneContent: object;
    starttimeStr: string;
    chartid: string;
    jurl: object;
    createtimeStr: string;
    isanony: object;
    starttimes: object;
    isdelete: number;
    endTime: number;
    attendPer: object;
    ifgetrange: object;
    updatetime: number;
    islook: object;
    createuid: string;
    mark: object;
    locationLongitude: string;
    locationLatitude: string;
}
