import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import "../../App.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    // Ensure old orders have status field
    const updatedOrders = savedOrders.map(order => ({
      ...order,
      status: order.status || "pending",
      created_at: order.created_at || order.date || new Date().toISOString(),
      delivered_at: order.delivered_at || null,
      cancelled_at: order.cancelled_at || null
    }));
    setOrders(updatedOrders);
    // Update localStorage with updated orders
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        const updatedOrder = {
          ...order,
          status: newStatus
        };
        
        if (newStatus === "delivered") {
          updatedOrder.delivered_at = new Date().toISOString();
        } else if (newStatus === "cancelled") {
          updatedOrder.cancelled_at = new Date().toISOString();
        }
        
        return updatedOrder;
      }
      return order;
    });
    
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleMarkAsDelivered = (orderId) => {
    if (window.confirm("Mark this order as delivered?")) {
      updateOrderStatus(orderId, "delivered");
    }
  };

  const handleCancelOrder = (orderId) => {
    setOrderToCancel(orderId);
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    if (orderToCancel) {
      updateOrderStatus(orderToCancel, "cancelled");
      setShowCancelConfirm(false);
      setOrderToCancel(null);
    }
  };

  const handleDeleteOrder = (orderId) => {
    setOrderToDelete(orderId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (orderToDelete) {
      const updatedOrders = orders.filter(order => order.id !== orderToDelete);
      setOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setShowDeleteConfirm(false);
      setOrderToDelete(null);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "badge bg-warning text-dark";
      case "delivered":
        return "badge bg-success";
      case "cancelled":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const filteredOrders = orders.filter(order => {
    const status = order.status || "pending";
    return status === activeTab;
  });

  const pendingCount = orders.filter(o => (o.status || "pending") === "pending").length;
  const deliveredCount = orders.filter(o => o.status === "delivered").length;
  const cancelledCount = orders.filter(o => o.status === "cancelled").length;

  return (
    <div>
      <AdminNavbar/>
      <div className="container mt-5">
        <h2 className="fw-bold mb-4">Order Management</h2>
        
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "pending" ? "active" : ""}`}
              onClick={() => setActiveTab("pending")}
            >
              Pending Orders <span className="badge bg-warning text-dark ms-2">{pendingCount}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "delivered" ? "active" : ""}`}
              onClick={() => setActiveTab("delivered")}
            >
              Delivered Orders <span className="badge bg-success ms-2">{deliveredCount}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "cancelled" ? "active" : ""}`}
              onClick={() => setActiveTab("cancelled")}
            >
              Cancelled Orders <span className="badge bg-danger ms-2">{cancelledCount}</span>
            </button>
          </li>
        </ul>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="alert alert-info">
            No {activeTab} orders found.
          </div>
        ) : (
          <div className="orders-list">
            {filteredOrders.map((order) => (
              <div key={order.id} className="card mb-4 p-4 shadow-sm order-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="mb-2">Order ID: #{order.id}</h5>
                    <span className={getStatusBadgeClass(order.status || "pending")}>
                      {(order.status || "pending").toUpperCase()}
                    </span>
                  </div>
                  <div className="text-end">
                    <small className="text-muted">
                      Created: {formatDate(order.created_at || order.date)}
                    </small>
                    {order.delivered_at && (
                      <div className="mt-1">
                        <small className="text-success">
                          Delivered: {formatDate(order.delivered_at)}
                        </small>
                      </div>
                    )}
                    {order.cancelled_at && (
                      <div className="mt-1">
                        <small className="text-danger">
                          Cancelled: {formatDate(order.cancelled_at)}
                        </small>
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <p className="mb-1"><strong>Customer:</strong> {order.customer.name}</p>
                    <p className="mb-1"><strong>Email:</strong> {order.customer.email}</p>
                    <p className="mb-1"><strong>Address:</strong> {order.customer.address}, {order.customer.city} {order.customer.zip}</p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="mb-2">Order Items:</h6>
                    <ul className="list-unstyled">
                      {order.items.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item.title} x {item.quantity} - Rs. {item.price * item.quantity}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 mb-0"><strong>Total: Rs. {order.total}</strong></p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex gap-2 mt-3 flex-wrap">
                  {/* Pending Orders Actions */}
                  {activeTab === "pending" && (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleMarkAsDelivered(order.id)}
                      >
                        <i className="fas fa-check me-1"></i> Mark as Delivered
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleCancelOrder(order.id)}
                      >
                        <i className="fas fa-times me-1"></i> Cancel Order
                      </button>
                    </>
                  )}
                  {/* Delete Button for All Orders */}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    <i className="fas fa-trash me-1"></i> Delete Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelConfirm && (
        <div className="modal-overlay" onClick={() => setShowCancelConfirm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Confirm Cancellation</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowCancelConfirm(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to cancel this order? This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowCancelConfirm(false)}
              >
                No, Keep Order
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmCancel}
              >
                Yes, Cancel Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowDeleteConfirm(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-danger fw-bold">Warning: This action cannot be undone!</p>
              <p>Are you sure you want to permanently delete this order? All order information will be lost.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowDeleteConfirm(false)}
              >
                No, Keep Order
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmDelete}
              >
                <i className="fas fa-trash me-1"></i> Yes, Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      <AdminFooter/>
    </div>
  );
};

export default AdminOrders;
