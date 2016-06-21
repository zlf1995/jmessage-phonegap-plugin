var exec = require("cordova/exec");

var JMessagePlugin = function () {
    this.username = "";
    this.nickname = "";
    this.gender = "";
    this.avatarUrl = "";

    this.message = {};
    this.openedMessage = {};
    this.textMessage = {};
    this.imageMessage = {};
    this.voiceMessage = {};
    this.customMessage = {};
};

JMessagePlugin.prototype.init = function () {

};

JMessagePlugin.prototype.errorCallback = function(msg) {
    console.log("JMessagePlugin callback error:" + msg);
};

JMessagePlugin.prototype.callNative = function(name, args, successCallback,
        errorCallback) {
    if (errorCallback == null) {
        exec(successCallback, this.errorCallback, "JMessagePlugin", name, args);
    } else {
        exec(successCallback, errorCallback, "JMessagePlugin", name, args);
    }
};


// Login and register API.

JMessagePlugin.prototype.register = function (username, password, successCallback,
        errorCallback) {
    this.callNative("register", [username, password], successCallback, errorCallback);
};

JMessagePlugin.prototype.login = function (username, password, successCallback,
        errorCallback) {
    this.callNative("login", [username, password], successCallback, errorCallback);
};

JMessagePlugin.prototype.logout = function(successCallback, errorCallback) {
    this.callNative("logout", [], successCallback, errorCallback);
};


// User info API.

// 如果 appKey 为空，获取当前 AppKey 下的用户信息。
JMessagePlugin.prototype.getUserInfo = function(username, appKey, successCallback,
        errorCallback) {
    this.callNative("getUserInfo", [username, appKey], successCallback, errorCallback);
};

JMessagePlugin.prototype.getMyInfo = function(successCallback, errorCallback) {
    this.callNative("getMyInfo", [], successCallback, errorCallback);
};

JMessagePlugin.prototype.updateUserInfo = function(username, appKey,
        userInfoField, value, successCallback, errorCallback) {
    this.callNative("updateUserInfo", [username, appKey, userInfoField, value],
        successCallback, errorCallback);
};

JMessagePlugin.prototype.updateMyInfo = function(field, value, successCallback,
        errorCallback) {
    this.callNative("updateMyInfo", [field, value], successCallback, errorCallback);
};

JMessagePlugin.prototype.updateUserPassword = function(oldPwd, newPwd,
        successCallback, errorCallback) {
    this.callNative("updateUserPassword", [oldPwd, newPwd], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.updateUserAvatar = function(avatarFileUrl, successCallback,
        errorCallback) {
    this.callNative("updateUserAvatar", [avatarFileUrl], successCallback, errorCallback);
};


// Message API.

JMessagePlugin.prototype.sendSingleTextMessage = function (username, text, appKey,
        successCallback, errorCallback) {
    this.callNative("sendSingleTextMessage", [username, text, appKey],
        successCallback, errorCallback);
};

JMessagePlugin.prototype.sendSingleImageMessage = function (username, imageUrl,
        appKey, successCallback, errorCallback) {
    this.callNative("sendSingleImageMessage", [username, imageUrl, appKey],
        successCallback, errorCallback);
};

JMessagePlugin.prototype.sendSingleVoiceMessage = function (username, fileUrl,
        appKey, successCallback, errorCallback) {
    this.callNative("sendSingleVoiceMessage", [username, fileUrl, appKey],
        successCallback, errorCallback);
};

JMessagePlugin.prototype.sendSingleCustomMessage = function (username, jsonStr,
        appKey, successCallback, errorCallback) {
    this.callNative("sendSingleCustomMessage", [username, jsonStr, appKey],
        successCallback, errorCallback);
};

JMessagePlugin.prototype.sendGroupTextMessage = function (username, text,
        successCallback, errorCallback) {
    this.callNative("sendGroupTextMessage", [username, text], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.sendGroupImageMessage = function (username, imageUrl,
        successCallback, errorCallback) {
    this.callNative("sendGroupImageMessage", [username, imageUrl], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.sendGroupVoiceMessage = function (username, fileUrl,
        successCallback, errorCallback) {
    this.callNative("sendGroupVoiceMessage", [username, fileUrl], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.sendGroupCustomMessage = function (username, jsonStr,
        successCallback, errorCallback) {
    this.callNative("sendGroupCustomMessage", [username, jsonStr], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.getLatestMessage = function(conversationType, value,
        appKey, successCallback, errorCallback) {
    this.callNative("getLatestMessage", [conversationType, value, appKey],
        successCallback, errorCallback);
};

// 获取指定 Conversation 的部分历史消息。conversationType: 'single' or 'group';
// value: username if conversation type is 'single' or groupId if conversation type is 'group'.
JMessagePlugin.prototype.getHistoryMessages = function(conversationType, value,
        appKey, from, limit, successCallback, errorCallback) {
    this.callNative("getHistoryMessages", [conversationType, value, appKey, from, limit],
        successCallback, errorCallback);
};

// 获取指定 Conversation 的全部历史消息。
JMessagePlugin.prototype.getAllMessages = function(conversationType, value,
        appKey, successCallback, errorCallback) {
    this.callNative("getAllMessages", [conversationType, value, appKey],
        successCallback, errorCallback);
};


// Conversation API.

JMessagePlugin.prototype.getConversationList = function(successCallback,
        errorCallback) {
    this.callNative("getConversationList", [], successCallback, errorCallback);
};

// username: 目标用户的用户名。
JMessagePlugin.prototype.getSingleConversation = function(username, appKey,
        successCallback, errorCallback) {
    this.callNative("getSingleConversation", [username, appKey], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.getAllSingleConversation = function(successCallback,
        errorCallback) {
    this.callNative("getAllSingleConversation", [], successCallback, errorCallback);
};

JMessagePlugin.prototype.setSingleConversationUnreadMessageCount = function(username,
        appKey, unreadMessageCount, successCallback, errorCallback) {
    this.callNative("setSingleConversationUnreadMessageCount",
        [username, appKey, unreadMessageCount], successCallback, errorCallback);
};

JMessagePlugin.prototype.getGroupConversation = function(groupId, successCallback,
        errorCallback) {
    this.callNative("getGroupConversation", [groupId], successCallback, errorCallback);
};

JMessagePlugin.prototype.getAllGroupConversation = function(successCallback,
        errorCallback) {
    this.callNative("getAllGroupConversation ", [], successCallback, errorCallback);
};

JMessagePlugin.prototype.setGroupConversationUnreadMessageCount = function(groupId,
        unreadMessageCount, successCallback, errorCallback) {
    this.callNative("setGroupConversationUnreadMessageCount",
        [groupId, unreadMessageCount], successCallback, errorCallback);
};

JMessagePlugin.prototype.deleteSingleConversation = function(username, appKey,
        successCallback, errorCallback) {
    this.callNative("deleteSingleConversation", [username, appKey], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.deleteGroupConversation = function(groupId,
        successCallback, errorCallback) {
    this.callNative("deleteGroupConversation", [groupId], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.enterSingleConversation = function(username, appKey,
        successCallback, errorCallback) {
    this.callNative("enterSingleConversation", [username, appKey], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.enterGroupConversation = function(groupId, successCallback,
        errorCallback) {
    this.callNative("enterGroupConversation", [groupId], successCallback, errorCallback);
};

JMessagePlugin.prototype.exitConversation = function(successCallback, errorCallback) {
    this.callNative("exitConversation", [], successCallback, errorCallback);
};


// Group API.

JMessagePlugin.prototype.createGroup = function(groupName, groupDesc,
        successCallback, errorCallback) {
    this.callNative("createGroup", [groupName, groupDesc], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.getGroupIDList = function(successCallback, errorCallback) {
    this.callNative("getGroupIDList", [], successCallback, errorCallback);
};

JMessagePlugin.prototype.getGroupInfo = function(groupId, successCallback,
        errorCallback) {
    this.callNative("getGroupInfo", [groupId], successCallback, errorCallback);
};

JMessagePlugin.prototype.updateGroupName = function(groupId, groupNewName,
        successCallback, errorCallback) {
    this.callNative("updateGroupName", [groupId, groupNewName], successCallback,
        errorCallback);
};

JMessagePlugin.prototype.updateGroupDescription = function(groupId, groupNewDesc,
        successCallback, errorCallback) {
    this.callNative("updateGroupDescription", [groupId, groupNewDesc],
        successCallback, errorCallback);
};

// userNameList 格式为 "userName1,userName2" 字符串。
JMessagePlugin.prototype.addGroupMembers = function(groupId, userNameListStr,
        success) {
    this.callNative("addGroupMembers", [userNameListStr], success);
};

// userNameList 格式为 "userName1,userName2" 字符串。
JMessagePlugin.prototype.removeGroupMembers = function(groupId, userNameListStr,
        success) {
    this.callNative("removeGroupMembers", [userNameListStr], success);
};

JMessagePlugin.prototype.exitGroup = function(groupId, successCallback,
        errorCallback) {
    this.callNative("exitGroup", [groupId], successCallback, errorCallback);
};

JMessagePlugin.prototype.getGroupMembers = function(groupId, successCallback,
        errorCallback) {
    this.callNative("getGroupMembers", [groupId], successCallback, errorCallback);
};


// Blacklist API.

/**
* usernameStr: 被 "," 分隔的用户名字符串，如 "username1,username2";
*/
JMessagePlugin.prototype.addUsersToBlacklist = function(usernameStr, success) {
    this.callNative("addUsersToBlacklist", [usernameStr], success);
};

JMessagePlugin.prototype.delUsersFromBlacklist = function(usernameStr, success) {
    this.callNative("delUsersFromBlacklist ", [usernameStr], success);
};

JMessagePlugin.prototype.getBlacklist = function(success) {
    this.callNative("getBlacklist", [], success);
};


// handle event.
JMessagePlugin.prototype.onOpenMessage = function(data) {
    data = JSON.stringify(data);
    this.openedMessage = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onOpenMessage", null);
};

JMessagePlugin.prototype.onReceiveMessage = function(data) {
    data = JSON.stringify(data);
    this.message = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onReceiveMessage", null);
};

JMessagePlugin.prototype.onReceiveTextMessage = function(data) {
    data = JSON.stringify(data);
    this.textMessage = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onReceiveTextMessage", null);
};

JMessagePlugin.prototype.onReceiveImageMessage = function(data) {
    data = JSON.stringify(data);
    this.imageMessage = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onReceiveImageMessage", null);
};

JMessagePlugin.prototype.onReceiveVoiceMessage = function(data) {
    data = JSON.stringify(data);
    this.voiceMessage = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onReceiveVoiceMessage", null);
};

JMessagePlugin.prototype.onReceiveCustomMessage = function(data) {
    data = JSON.stringify(data);
    this.customMessage = JSON.parse(data);
    cordova.fireDocumentEvent("jmessage.onReceiveCustomMessage", null);
};

JMessagePlugin.prototype.onUserPasswordChanged = function() {
    cordova.fireDocumentEvent("jmessage.onUserPasswordChanged", null);
};

JMessagePlugin.prototype.onUserLogout = function() {
    cordova.fireDocumentEvent("jmessage.onUserLogout", null);
};

JMessagePlugin.prototype.onUserDeleted = function() {
    cordova.fireDocumentEvent("jmessage.onUserDeleted", null);
};

JMessagePlugin.prototype.onGroupMemberAdded = function() {
    cordova.fireDocumentEvent("jmessage.onGroupMemberAdded", null);
};

JMessagePlugin.prototype.onGroupMemberRemoved = function() {
    cordova.fireDocumentEvent("jmessage.onGroupMemberRemoved", null);
};

JMessagePlugin.prototype.onGroupMemberExit = function() {
    cordova.fireDocumentEvent("jmessage.onGroupMemberExit", null);
};

if (!window.plugins) {
    window.plugins = {};
};

if (!window.plugins.jmessagePlugin) {
    window.plugins.jmessagePlugin = new JMessagePlugin();
};

module.exports = new JMessagePlugin();
