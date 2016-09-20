({
    newOpptyCreation: function(component, event) {

        // get the value of the new accountName available in the event object
        var accountName = event.getParam("accountName");

        //console.log('Account Name:' + accountName);


        component.set("v.accountName", accountName );
        component.set("v.style", "display:none2;" );

        //var toggleForm = component.find("opptyForm");
        //$A.util.toggleClass(toggleForm, "toggle")


    }
})
