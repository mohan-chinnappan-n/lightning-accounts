({
  doInit: function(component, event, helper) {
    //findAll() method in the component's server-side
    var action = component.get("c.findAllAccounts");

    action.setCallback(this, function(data) {
      component.set("v.accounts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    // That queue is an optimization feature of Lightning.

    $A.enqueueAction(action);
  },
})
