"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Bell, User, Heart, MessageCircle, Share, Clock } from "lucide-react";

export default function NotificationsPage() {
  // Mock notification data
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "John Doe",
      action: "liked your article",
      target: "Modern Architecture Trends in 2024",
      time: "2 hours ago",
      read: false,
      avatar: "/assets/images/article-1.jpg"
    },
    {
      id: 2,
      type: "comment",
      user: "Sarah Wilson",
      action: "commented on your article",
      target: "Sustainable Building Materials",
      time: "4 hours ago",
      read: false,
      avatar: "/assets/images/article-2.jpg"
    },
    {
      id: 3,
      type: "follow",
      user: "Mike Johnson",
      action: "started following you",
      target: "",
      time: "1 day ago",
      read: true,
      avatar: "/assets/images/article-3.jpg"
    },
    {
      id: 4,
      type: "share",
      user: "Emily Davis",
      action: "shared your article",
      target: "Smart Cities and Urban Planning",
      time: "2 days ago",
      read: true,
      avatar: "/assets/images/article-4.jpg"
    },
    {
      id: 5,
      type: "like",
      user: "David Brown",
      action: "liked your article",
      target: "Green Building Certification",
      time: "3 days ago",
      read: true,
      avatar: "/assets/images/article-5.jpg"
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "comment":
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case "follow":
        return <User className="w-5 h-5 text-green-500" />;
      case "share":
        return <Share className="w-5 h-5 text-purple-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const markAllAsRead = () => {
    // Mark all notifications as read logic
    console.log("Mark all as read");
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/profile" className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Profile</span>
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8 text-yellow-500" />
            <h1 className="text-4xl font-bold text-white">Notifications</h1>
          </div>
          <button 
            onClick={markAllAsRead}
            className="text-yellow-500 hover:text-yellow-400 font-medium"
          >
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`bg-gray-900 rounded-2xl p-6 transition-colors hover:bg-gray-800 ${
                !notification.read ? 'border-l-4 border-yellow-500' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* User Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={notification.avatar}
                    alt={notification.user}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Notification Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getNotificationIcon(notification.type)}
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{notification.user}</span>
                      <span className="text-gray-400">{notification.action}</span>
                      {notification.target && (
                        <>
                          <span className="text-gray-500">•</span>
                          <span className="text-yellow-500 font-medium">{notification.target}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{notification.time}</span>
                    {!notification.read && (
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  {notification.type === "follow" && (
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                      Follow Back
                    </button>
                  )}
                  {(notification.type === "like" || notification.type === "comment" || notification.type === "share") && (
                    <button className="text-yellow-500 hover:text-yellow-400 font-medium">
                      View Article
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Load More Notifications
          </button>
        </div>

        {/* Empty State (if no notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No notifications yet</h2>
            <p className="text-gray-400">When you get notifications, they&apos;ll show up here.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
