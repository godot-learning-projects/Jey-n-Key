function allPlayersListener() {
  allPlayersRef.on("value", (snapshot) => {
    players = snapshot.val() || {};
  });
}

function triggerListener() {
  triggerRef.remove();
  triggerRef.on("value", (snapshot) => {
    trigger = snapshot.val() || {};
    if (trigger) {
      if (trigger.triggered && seeker && trigger.by == seeker.id) {
        finishTimer();
      }
      consumeTrigger();
    }
  });
}

function consumeTrigger() {
  triggerRef.remove();
}
