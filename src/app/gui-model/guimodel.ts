export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Leos Friend Tracker",
            "formList": [
                {
                    
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        }, {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/friend/:friendKey/activity",
                            "form": "AddActivityForm",
                            "width": 2
                         },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                       
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }, {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                            
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/Activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "AddActivityForm",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                     
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-address-book",
                            "color": "midnight-blue",
                            "page": "friendspage",
                        },  
                        {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-chess",
                            "color": "green",
                            "page": "Activitiespage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-compass",
                            "color": "blue",
                            "page": "locationspage",
                        }, {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-folder",
                            "color": "teal",
                            "page": "groupspage",
                        },
                    ]
                }, {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        }, {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-eye",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        }
                    ]
                }, {
                    "id": "Activitiespage",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewActivity",
                    "icon": "fa-cannabis",
                    "color": "blue",
                    "form": {
                    "form": "AddActivityForm"
                    }
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "wisteria",
                        "search": true,
                        "url": "/Activity",
                        "form": {
                        "form": "AddActivityForm"
                        }
                        },
                    ]
                   },
                   {
                    "id": "Activitiespage2",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                        "type": "newButton",
                        "name": "EditFriend",
                        "icon": "fa-user",
                        "color": "green",
                        "form": {
                            "form": "FriendForm" 
                                                    }  
                    },
                    {
                    "type": "newButton",
                    "name": "NewActivity",
                    "icon": "fa-cannabis",
                    "color": "blue",
                    "form": {
                    "form": "AddActivityForm"
                    }
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "wisteria",
                        "search": true,
                        "url": "/friend/:friendKey/activity",
                        "form": {
                        "form": "AddActivityForm"
                        }
                        },
                    ]
                   },
                
                   
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm" 
                                                        }  
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "Activitiespage2"
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
