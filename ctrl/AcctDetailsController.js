({
  locationChange: function(component, event, helper) {
    // gets the new value of the hashtag available in the event object
    var token = event.getParam("token");

    // parses the hashtag to extract the contact id
    if (token.indexOf('account/') === 0) {
      var accountId = token.substr(token.indexOf('/') + 1);

      // invokes the findById() method in the Apex controller
      var action = component.get("c.findById");
      action.setParams({
        "accountId": accountId
      });

      // When the asynchronous call returns, it assigns the contact returned by
      //  findById() to the component's account attribute.
      action.setCallback(this, function(data) {
        component.set("v.account", data.getReturnValue());
      });
      $A.enqueueAction(action);
    }
  },

  createNewOppty: function(component, event, helper) {
    var accountName = event.target.dataset.accountname;
    //console.log("in createNewOppty for " + accountName);

    var myEvent = $A.get("e.mohansundar:NewOpptyCreationRequest");
    myEvent.setParams({
      "accountName": accountName
    });
    myEvent.fire();
  }
})
