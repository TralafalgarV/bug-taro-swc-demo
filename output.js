/**
 * 所有页面的路径
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    pathsMap: function() {
        return pathsMap;
    },
    default: function() {
        return _default;
    }
});
var pathsMap = {
    pages: {
        login: "pages/login/index",
        menu: "pages/menu/index",
        accountLogin: "pages/login/accountLogin/index",
        noUser: "pages/noUser/index",
        selectorg: "pages/selectorg/index",
        orderList: "pages/orderList/index",
        mine: "pages/mine/index",
        order: "pages/order/index"
    },
    subPackages: [
        {
            root: "subPackage",
            pages: {
                agree: "pages/agree/index",
                register: "pages/register/index",
                noShop: "pages/noShop/index",
                orderConfirm: "pages/orderConfirm/index",
                selectPersonAndStall: "pages/selectPersonAndStall/index",
                pay: "pages/pay/index",
                selectGroup: "pages/selectGroup/index",
                selectBed: "pages/selectBed/index",
                profile: "pages/profile/profile",
                noAuth: "pages/noAuth/index",
                paySuccess: "pages/paySuccess/index",
                customLink: "pages/customLink/index"
            }
        },
        {
            root: "subMenuPackage",
            pages: {
                detail: "pages/detail/index",
                purchaseLimit: "pages/purchaseLimit/index"
            }
        },
        {
            root: "subOrderPackage",
            pages: {
                orderDetail: "pages/orderDetail/index"
            }
        },
        {
            root: "subPlatePackage",
            pages: {
                plateBinding: "pages/plateBinding/index",
                plateCheckout: "pages/plateCheckout/index"
            }
        },
        {
            root: "subMinePackage",
            pages: {
                setting: "pages/setting/index",
                fund: "pages/fund/fund",
                refund: "pages/refund/index",
                recharge: "pages/recharge/index",
                shopList: "pages/shopList/index",
                noticeList: "pages/noticeList/index",
                noticeDetail: "pages/noticeDetail/index",
                invoiceManagement: "pages/invoice/invoiceManagement/index",
                invoiceDetail: "pages/invoice/invoiceDetail/index",
                addInvoice: "pages/invoice/addInvoice/index",
                invoiceExplanation: "pages/invoice/invoiceManagement/container/invoiceExplanation/index",
                invoiceList: "pages/invoice/invoiceManagement/container/invoiceList/index",
                aliFaceIDCard: "pages/aliFaceIDCard/index",
                withholdingContract: "pages/withholdingContract/index"
            }
        }
    ]
};
var config = {
    pages: Object.values(pathsMap.pages),
    subPackages: pathsMap.subPackages.map(function(item) {}),
    window: {
        backgroundTextStyle: "dark",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "",
        navigationBarTextStyle: "black",
        backgroundColor: "#F5F5F5"
    },
    // lazyCodeLoading: 'requiredComponents',
    tabBar: {
        borderStyle: "white",
        color: "#7E7E7E",
        selectedColor: "#ED5655",
        backgroundColor: "#ffffff",
        list: [
            {
                pagePath: "pages/menu/index",
                text: "菜谱",
                iconPath: "assets/order.png",
                selectedIconPath: "assets/orderActived.png"
            },
            {
                pagePath: "pages/orderList/index",
                text: "订单",
                iconPath: "assets/orderList.png",
                selectedIconPath: "assets/orderListActived.png"
            },
            {
                pagePath: "pages/mine/index",
                text: "我的",
                iconPath: "assets/mine.png",
                selectedIconPath: "assets/mineActived.png"
            }
        ]
    }
};
var _default = config;
