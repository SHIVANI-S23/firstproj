import React from 'react';

const TrainSchedule = () => {
  const trains = [
    {
      trainNumber: 1,
      trainName: 'Express Train',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      destination: 'New York City',
      estimatedTravelTime: '2 hours',
      platformNumber: 10,
    },
    {
      trainNumber: 2,
      trainName: 'Local Train',
      departureTime: '11:00 AM',
      arrivalTime: '1:00 PM',
      destination: 'Philadelphia',
      estimatedTravelTime: '3 hours',
      platformNumber: 11,
    },
    {
      trainNumber: 3,
      trainName: 'High-Speed Train',
      departureTime: '12:00 PM',
      arrivalTime: '2:00 PM',
      destination: 'Washington, D.C.',
      estimatedTravelTime: '4 hours',
      platformNumber: 12,
    },
  ];

  return (
    <div>
      <h1>Train Schedule</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Destination</th>
            <th>Estimated Travel Time</th>
            <th>Platform Number</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainNumber}</td>
              <td>{train.trainName}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
              <td>{train.destination}</td>
              <td>{train.estimatedTravelTime}</td>
              <td>{train.platformNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
