import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  public type Category = {
    #govtJob;
    #notice;
    #update;
  };

  public type Notification = {
    id : Nat;
    title : Text;
    description : Text;
    datePosted : Time.Time;
    category : Category;
  };

  let notificationsMap = Map.empty<Nat, Notification>();
  var nextId = 0;

  public shared ({ caller }) func addNotification(
    title : Text,
    description : Text,
    category : Category,
  ) : async Nat {
    let id = nextId;
    let newNotification : Notification = {
      id;
      title;
      description;
      datePosted = Time.now();
      category;
    };
    notificationsMap.add(id, newNotification);
    nextId += 1;
    id;
  };

  func notificationCompareByDate(a : (Nat, Notification), b : (Nat, Notification)) : Order.Order {
    if (a.1.datePosted < b.1.datePosted) {
      return #less;
    };
    if (a.1.datePosted > b.1.datePosted) { return #greater };
    #equal;
  };

  public query ({ caller }) func getAllNotifications() : async [Notification] {
    let notificationsArray = notificationsMap.toArray();
    let sortedArray = notificationsArray.sort(
      notificationCompareByDate
    );
    let notifications = sortedArray.map(
      func(entry) { entry.1 }
    );
    notifications;
  };

  public shared ({ caller }) func deleteNotification(id : Nat) : async () {
    switch (notificationsMap.get(id)) {
      case (?_notification) {
        notificationsMap.remove(id);
      };
      case (null) {
        Runtime.trap("Notification not found");
      };
    };
  };

  public query ({ caller }) func getNotification(id : Nat) : async ?Notification {
    notificationsMap.get(id);
  };
};
