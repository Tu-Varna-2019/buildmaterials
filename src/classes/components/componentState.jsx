import { useState } from "react";

export function ComponentState() {
  // Create
  const [showCreateRoomPage, setShowCreateRoomPage] = useState(false);
  const [showCreateRegistrationPage, setShowCreateRegistrationPage] =
    useState(false);

  // Update
  const [showUpdateClientPage, setShowUpdateClientPage] = useState(false);
  const [showUpdateRoomPage, setShowUpdateRoomPage] = useState(false);
  const [showUpdateRegistrationPage, setShowUpdateRegistrationPage] =
    useState(false);

  // Output Table
  const [showAvailableRooms, setShowAvailableRooms] = useState(false);
  const [showAllSSNs, setShowAllSSNs] = useState(false);
  const [showBookingTurnover, setShowBookingTurnover] = useState(false);

  return {
    showAllSSNs,
    setShowAllSSNs,
    showBookingTurnover,
    setShowBookingTurnover,
    showAvailableRooms,
    setShowAvailableRooms,
    showUpdateClientPage,
    setShowUpdateClientPage,
    showCreateRoomPage,
    showUpdateRoomPage,
    showCreateRegistrationPage,
    showUpdateRegistrationPage,
    setShowCreateRoomPage,
    setShowUpdateRoomPage,
    setShowCreateRegistrationPage,
    setShowUpdateRegistrationPage,
  };
}
