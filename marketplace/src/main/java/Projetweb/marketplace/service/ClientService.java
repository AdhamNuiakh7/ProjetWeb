package Projetweb.marketplace.service;

import Projetweb.marketplace.exception.UserNotFoundException;
import Projetweb.marketplace.model.Client;
import Projetweb.marketplace.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ClientService {

    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public Client addClient(Client client) {
        client.setClientCode(UUID.randomUUID().toString());
        System.out.println(client);
        return clientRepo.save(client);

    }

    public List<Client> findAllClients() {
        return clientRepo.findAll();
    }

    public Client updateClient(Client client) {
        return clientRepo.save(client);
    }

    public Client findClientById(Long id) {
        return clientRepo.findById(id) // Changed from findClientById to findById
                .orElseThrow(() -> new UserNotFoundException("Client by id " + id + " was not found"));
    }

    public void deleteClient(Long id) {
        clientRepo.deleteById(id); // Changed from deleteClientById to deleteById
    }
}
