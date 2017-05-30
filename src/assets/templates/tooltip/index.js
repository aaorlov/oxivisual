function my_parser(options) {
    if (!options || options.dataSource || !(options.assignElements instanceof Array))return ;
    var dataSource = options.dataSource,
        assignElements = (options.assignElements || [
            ['info_box_header', 'info_box_title', 'info_label_title', 'id'],
            ['tooltip.header', 'tooltip.title', 'label.title', '_id']
        ]),
        res = {},
        noClone = [],
        copyAssign = function (obj) {
            var temp = obj instanceof Array ? [] : {},
                clone = function (o) {
                    var newTemp;
                    if (typeof(o) == "object" && o != null && noClone.indexOf(o.constructor.name) < 0) {
                        newTemp = copyAssign(o);
                    }
                    else {
                        newTemp = o;
                    }
                    return newTemp;
                };

            for (var i in obj) {
                var matchInd = assignElements[0].indexOf(i),
                    copyT = temp;
                if (matchInd > -1) {
                    var matchRes = assignElements[1][matchInd].split(".");
                    for (var t = 0; t < matchRes.length; t++) {
                        if (t + 1 >= matchRes.length) {
                            if (!copyT[matchRes[t]])copyT[matchRes[t]] = {};
                            copyT = copyT[matchRes[t]];
                        } else {
                            copyT[t] = clone(obj[i])
                        }
                    }
                } else {
                    clone(obj[i]);
                }
            }
            return temp;
        };

    return copyAssign(dataSource);
}